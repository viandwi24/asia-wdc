/*
 _______  _______  _______  _______        ___  _______ 
|       ||   _   ||       ||       |      |   ||       |
|    _  ||  |_|  ||    ___||    ___|      |   ||  _____|
|   |_| ||       ||   | __ |   |___       |   || |_____ 
|    ___||       ||   ||  ||    ___|   ___|   ||_____  |
|   |    |   _   ||   |_| ||   |___   |       | _____| |
|___|    |__| |__||_______||_______|  |_______||_______|

[+] script ini murni ditulis oleh author
[+] Author : Alfian Dwi Nugraha & Rendi Dwi
            _                                           _ _ 
          (_)               ___                       | (_)
    __   ___  __ _ _ __    ( _ )    _ __ ___ _ __   __| |_ 
    \ \ / / |/ _` | '_ \   / _ \/\ | '__/ _ \ '_ \ / _` | |
     \ V /| | (_| | | | | | (_>  < | | |  __/ | | | (_| | |
      \_/ |_|\__,_|_| |_|  \___/\/ |_|  \___|_| |_|\__,_|_|

   [+] Murni ditulis oleh Alfian Dwi Nugraha & Rendi Dwi [+]

 */

var page = {
    options: {},
    animRunning: false,

    init(options) {
        this.options = options;
    },
    build() {
        let app = $(this.options.el);
        let sections = $('<div class="sections" />');

        app.addClass('page');
        app.html('');
        app.append(sections);

        let i = 0;
        this.options.scenes.forEach(item => {
            let section = $('<div class="section" id="section-'+item.name+'" data-id="'+item.name+'" data-index="'+i+'" />');

            if (!item.bgColor) item.bgColor = "black";

            section.css({'background-color': item.bgColor, 'display': 'none'});
            sections.append(section);
            i++;
        });

        if (this.options.withNavIndicator) this.buildNavIndicator();

        let target = $(this.options.el+'.page .sections .section:first-child');
        let targetId = target.data('index');
        let page = this;
        let current = target;

        let handleBeforeIn = pageTransition.handleAnim('beforeIn', targetId, { section: target, page, current, target });
        handleBeforeIn.then( () => {
            target.addClass('active');
            target.css('display', 'block');
            pageTransition.handleAnim('afterIn', targetId, { section: target, page, current, target });
            this.buildNavIndicator();
        });
    },
    buildNavIndicator() {
        if (!this.options.withNavIndicator) return ;
        if ($(this.options.el + " .nav-btn").length > 0) $(this.options.el + " .nav-btn").remove();

        $(this.options.el).append( $('<div style="z-index:20;" class="nav-btn" />') );
        let appNavContainer = $(this.options.el + " .nav-btn");
        let sections = this.options.scenes;
        let current = $(this.options.el+'.page .sections .section.active');
        let navIndicatorButtonNext = '>';
        let navIndicatorButtonPrev = '<';
        if (this.options.navIndicatorButtonNext !== undefined) navIndicatorButtonNext = this.options.navIndicatorButtonNext;
        if (this.options.navIndicatorButtonPrev !== undefined) navIndicatorButtonPrev = this.options.navIndicatorButtonPrev;
        // console.log(typeof this.options.navIndicatorButtonNext)

        appNavContainer.html("");
        
        if (navIndicatorButtonPrev != null) {
            appNavContainer.append('<button class="btn" onclick="page.prevScene()" class="prev">'+navIndicatorButtonPrev+'</button>');
        }

        var i = 0;
        sections.forEach(item => {
            let data = { scene: item, index: i, section: $(this.options.el + ' .sections .section[data-index="'+i+'"]') };
            let content = () => { return (i+1); }

            if (typeof this.options.navIndicatorButtonContent === "function") content = this.options.navIndicatorButtonContent;

            appNavContainer.append('<button class="btn'+ ((i == current.data('index')) ? ' active' : '') +'" onclick="page.toScene('+(i)+')" class="indicator">'+ content(data) +'</button>');
            i++;
        });

        if (navIndicatorButtonNext != null) {
            appNavContainer.append('<button class="btn" onclick="page.nextScene()" class="next">'+navIndicatorButtonNext+'</button>');
        }
    },
    getScenes() { return this.options.scenes; },
    toScene(index, transitionName = this.options.transition) {
        let current = $(this.options.el+'.page .sections .section.active');
        let target = $(this.options.el+'.page .sections .section[data-index="'+index+'"]');
        let delayBeforeChangeScene = this.options.delayBeforeChangeScene || 0;

        // handle
        if (target.length == 0) return ;
        if (current.data('index') == index) return ;
        if (this.animRunning) return ;
        
        // set anim state
        this.animRunning = true;

        // handle scene with custom transition
        return setTimeout( () => pageTransition.handleScene(this, transitionName, current, target), delayBeforeChangeScene);
    },
    nextScene(transitionName = this.options.transition) {
        let current = $(this.options.el+'.page .sections .section.active');
        let target = $(this.options.el+'.page .sections .section[data-index="'+ (current.data('index') + 1) +'"]');

        // handle
        if (target.length == 0) return ;

        return this.toScene(target.data('index'), transitionName);
    },
    prevScene(transitionName = this.options.transition) {
        let current = $(this.options.el+'.page .sections .section.active');
        let target = $(this.options.el+'.page .sections .section[data-index="'+ (current.data('index') - 1) +'"]');

        // handle
        if (target.length == 0) return ;

        return this.toScene(target.data('index'), transitionName);
    }
}

var pageTransition = {
    transitionList: {},

    handleScene(pageClass, transitionName, current, target) {
        let transitionClass = this;
        if (typeof this.transitionList[transitionName] !== "function") console.error("Transition '" + transitionName + "' not found!");
        this.transitionList[transitionName](pageClass, transitionClass, current, target);
    },

    add(name, func) {
        this.transitionList[name] = func;
    },
    handleAnim(type, index, data) {
        let scenes = data.page.options.scenes;

        if (type == 'beforeIn') {
            let prom = new Promise( (resolv, reject) => {
                if (typeof scenes[index].beforeIn === 'function') {
                    scenes[index].beforeIn(data, { resolv, reject });
                } else { resolv(); }
            });
            return prom;
        } else if (type == 'beforeOut') {
            let prom = new Promise( (resolv, reject) => {
                if (typeof scenes[index].beforeOut === 'function') {
                    scenes[index].beforeOut(data, { resolv, reject });
                } else { resolv(); }
            });
            return prom;
        } else if (type == 'afterIn') {
            if (typeof scenes[index].afterIn === 'function') scenes[index].afterIn(data);
        } else if (type == 'afterOut') {
            if (typeof scenes[index].afterOut === 'function') scenes[index].afterOut(data);
        }

        return ;
    }
}




// add transition default : fade
pageTransition.add('fade', (page, transition, current, target) => {
    let currentId = current.data('index');
    let targetId = target.data('index');
    let currentScene = page.options.scenes[currentId];
    let targetScene = page.options.scenes[targetId];

    // target before in
    let handleBeforeIn = transition.handleAnim('beforeIn', targetId, { section: target, page, current, target });
    let handleBeforeOut = transition.handleAnim('beforeOut', currentId, { section: current, page, current, target });

    handleBeforeIn.then( () => {

        current.removeClass('active');
        target.addClass('active');
        target.css({ display: 'none' });
        page.buildNavIndicator();
        let stateAnimTransition = { fadeIn: false, fadeOut: false };

        handleBeforeOut.then( () => {

            // transition effect : show target
            target.fadeIn({
                duration: 'slow',
                complete: () => {
                    // after in
                    transition.handleAnim('afterIn', targetId, { section: target, page, current, target });                            

                    // anim state run
                    stateAnimTransition.fadeIn = true;
                    if (stateAnimTransition.fadeIn && stateAnimTransition.fadeOut) page.animRunning = false;
                }
            });

            // transition effect : hide current
            setTimeout( () => current.fadeOut({
                duration: 'slow',
                complete: () => {
                    // after out
                    transition.handleAnim('afterOut', currentId, { section: current, page, current, target });

                    // anim state run
                    stateAnimTransition.fadeOut = true;
                    if (stateAnimTransition.fadeIn && stateAnimTransition.fadeOut) page.animRunning = false;
                }
            }), 200);
        });
    });
});




// boillerplate
pageTransition.add('custom-transition', (page, transition, current, target) => {
    let currentId = current.data('index');
    let targetId = target.data('index');
    let currentScene = page.options.scenes[currentId];
    let targetScene = page.options.scenes[targetId];

    // change state active from current to target
    current.removeClass('active');
    target.addClass('active');
    target.css({ display: 'none' });
    page.buildNavIndicator();

    // animated change
    target.fadeIn();
    current.fadeOut();

    // stop animrunning state
    page.animRunning = false;
});