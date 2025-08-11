export function createUrlFromString(url : string)
{
    let aLink = document.createElement("a");
    aLink.textContent = url;
    aLink.setAttribute("href", url);

    return aLink;
}