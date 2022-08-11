const missingReindeer = ids => {
    ids = ids.sort((a,b) => a > b ? 1 : -1);

    for (let id = 0; id < ids.length; id++) {
        if (ids[id] != id) return id;
        if (ids[id] === ids.length - 1) return id + 1;
    }
};