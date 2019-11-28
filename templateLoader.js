export default async function loadTemplates(templateUrls) {
    console.log(templateUrls);
    var templates = {};
    for (var t of templateUrls) {
        console.log(t.url);
        var response = await fetch(t.url);
        var html = await response.text();
        templates[t.name] = html;
    }
    return templates
}