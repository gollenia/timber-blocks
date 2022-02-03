function relativeUrl(url) {
    let virtualLink = document.createElement('a');
    virtualLink.href = url;
    return virtualLink.pathname;
}

export default relativeUrl;