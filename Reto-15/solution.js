const checkSledJump = heights => {
    const indexMax = heights.indexOf(Math.max(...heights));
    if (indexMax === heights.length - 1 || indexMax === 0) return false;

    let up = true, 
        down = true;

    heights.forEach((height, index) => {
        (index < indexMax)
            ? (height === heights[index + 1] || height > heights[index + 1]) ? up = false : null
            : (height < heights[index + 1]) ? down = false : null
        ;
    });

    return up && down;
};