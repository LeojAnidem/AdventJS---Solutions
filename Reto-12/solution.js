const getMinJump = obstacles => {
    let scene = new Array(10).fill('.');

    obstacles.forEach((obstacle) => scene[obstacle] = '*');
    
    for (let jump = 1; jump < scene.length; jump++) {
        for (let actualPos = jump; ;actualPos += jump) {
            if (scene[actualPos] === '*') break
            if (actualPos > scene.length) return jump;
        }
    }
};