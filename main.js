let c = document.getElementById("my-canvas");
let ctx = c.getContext("2d");
let loadImage = (src, callback) => {
    let img = document.creatElement("img");
    img.onload = () => callback(img);
    img.src = src;
};


let imagePath = (frameNumber, animation) => {
    return"/images/"+animation+"/" + frameNumber +".png";
};
let frames ={
    idle: [1, 2, 3, 4, 5, 6, 7, 8],
    kick: [1, 2, 3, 4, 5, 6, 7],
    punch: [1, 2, 3, 4, 5, 6,7],
};

let loadImages =( (callback) => {
    let images = {idle:[], kick:[], punch:[]};
    let imagesToLoad = 0;

    ["idle", "kick", "punch"].forEach((animation) => {
        let animationFrame = frames[animation];
        imagesToLoad=imagesToLoad+animationFrame-length;
        animationFrames.forEach((frameNumber) =>{
            let path=imagePath(frameNumber, animation);
            loadImage(path, (image) =>{
                images[animation][frameNumber-1]=image;
                imagesToLoad=imagesToLoad-1;
                if(imagesToLoad===0){
                    callback(images);
                }
            });
        });

        
        
    });
});

let animate=(ctx, images, animation, callback)=>{
    images[animation].forEach((image, index)=>{
        setTimeout(()=>{
            ctx.clearRect(0, 0, 500, 500);
            ctx.drawImages(image, 0, 0, 500, 500);
            
        }, index*100);
    });
    setTimeout(callback, images[animation].length*100);
};

loadImage = (images)=>{
   let selectedAnimation;
    
    if(queuedAnimations.length === 0){
        selectedAnimation = "idle";
    }else{
        selectedAnimation = queuedAnimations.shift();
    }
   
   
        animate(ctx, images, selectedanimation, aux);
    };
    
    aux();
    
    document.getElementById("kick").onclick=()=>{
        queuedAnimations.push("kick");
    };
    
    document.getElementById("punh").onclick=()=>{
        queuedAnimation.push("punh");
    };
    
    document.getElementById("idle").onclick=()=>{
       queuedAnimation.push("idle");
    };
    
    document.getElementById("backward").onclick=()=>{
       queuedAnimation.push("backward");
    };
    
    document.getElementById("block").onclick=()=>{
        queuedAnimation.push("block");
    };
    
    document.getElementById("forward").onclick=()=>{
        queuedAnimation.push("forward");
    };
document.addElementListner("keyup", (event) => {
    const key = event.key;
    
    if(key==="ArrowLeft"){
        queuedAnimation.push("kick");
    }else if(key === "ArrowRight"){
        queuedAnimation.push("punch");
    }
    });
