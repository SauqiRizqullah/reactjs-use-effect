export class FadeAnimation{
    constructor(node, startTime, frameId){
        this.node = node;
        this.startTime = startTime;
        this.frameId = frameId;
    }

    start(duration) {
        this.duration = duration;
        if (this.duration === 0) {

            this.onProgress(1);
        } else {
            this.onProgress(0)

            this.startTime = performance.now();
            this.frameId = requestAnimationFrame(() => this.onFrame())
        }
    }

    onFrame() {
        const timePassed = performance.now() - this.startTime;
        const progress = Math.min(timePassed / this.duration, 1)
        this.onProgress(progress)

        if (progress < 1) {
            // still have more frames to paint
            this.frameId = requestAnimationFrame(() => this.onFrame())
        }
    }

    onProgress(progress) {
        this.node.style.opacity = progress;
    }

    stop() {
        cancelAnimationFrame(this.frameId);
        this.startTime = null;
        this.frameId = null;
        this.duration = 0;
     }
}   