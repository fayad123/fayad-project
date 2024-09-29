function addItem() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;
    let rate = document.getElementById("rate").value;
    let Description = document.getElementById("Description").value;
    let Available = document.getElementById("Available").checked
        ? `<i class="fa-solid fa-check text-success"></i>`
        : `<i class="fa-solid fa-x text-danger"></i>`;
    document.getElementById("products").innerHTML += ` <tr><td>${name}</td>
            <td>${price}</td>
            <td>${category}</td>
            <td>${rate}</td>
            <td>${Description}</td>
            <td>${Available}</td></tr>`;

    document.getElementById("name").value = "";

    document.getElementById("price").value = "";

    document.getElementById("category").value = "";

    document.getElementById("rate").value = "1";

    document.getElementById("Description").value = "";

    document.getElementById("Available").checked = false;
}
