function setParams(url: string = "", params: object) {
    const queryStringIndex: number = url.indexOf("?");
    let kvp: any = {};
    if (queryStringIndex >= 0) {
        const oldQueryString = url.substr(queryStringIndex + 1).split("&");
        // @ts-ignore
        oldQueryString.forEach((x, i) => {
            const kv: string[] = oldQueryString[i].split("=");
            kvp[kv[0]] = kv[1];
        });
    }

    kvp = {...kvp, ...params};

    const queryString = Object.keys(kvp)
        .map(key => {
            return `${key}=${encodeURI(kvp[key])}`;
        })
        .join("&");

    if (queryStringIndex >= 0) {
        return url.substring(0, queryStringIndex + 1) + queryString;
    } else {
        return url + "?" + queryString;
    }
}

export default {
    setParams
};
