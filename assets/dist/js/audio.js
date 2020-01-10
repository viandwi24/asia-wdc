myaudio = {
    audios: [],
    basePath: '../assets/audio/',
    func: () => console.log("Audio : onloaded"),

    load(data) {
        data.forEach(item => {
            let aud = new Audio(this.basePath + item.src);
            this.audios[item.name] = {
                name: item.name,
                src: item.src,
                cache: null,
                loaded: false,
            }

            aud.onloadeddata = (e) => {
                this.audios[item.name].cache = e.target;
                this.audios[item.name].loaded = true;
                if (this.checkReady()) {
                    this.func.call();
                }
            }
        });
    },

    get(name) {
        return this.audios[name].cache;
    },

    checkReady() {
        let siap = null;
        for(audio in this.audios) {
            var item = this.audios[audio];
            if (siap == null) siap = true;
            if (!item.loaded) siap = false;
        }

        return siap;
    },

    onloaded(func) {
        this.func = func;
    }
}