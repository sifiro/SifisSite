export function tableMaker(headerTable: Array<string>, content: (string | undefined)[][]) {
    let tableRoot = document.createElement("table");
    let sample: Element;

    let trBody: Element;

    trBody = document.createElement("tr");
    headerTable.forEach((e) => {
        sample = document.createElement("th");
        sample.innerHTML = e;
        trBody.append(sample);
    });

    tableRoot.append(trBody);

    content.forEach(item => {
        console.log("")
        trBody = document.createElement("tr");

        item.forEach((e) => {
            sample = document.createElement("td");
            sample.innerHTML = e ? e : '';
            trBody.appendChild(sample);
        });

        tableRoot.append(trBody);
    })

    tableRoot.append(trBody);

    return tableRoot;
}