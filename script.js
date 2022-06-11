const articles = [
    `1 Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem
    ipsum dolor sit amet consectetur, adipisicing elit.
    Consequatur fuga placeat earum nostrum, illo aut minima sunt
    nulla tempora in laboriosam, unde dolores veniam maxime?
    Perspiciatis cum debitis adipisci voluptatum!`,
    `2 Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem
    ipsum dolor sit amet consectetur, adipisicing elit.
    Consequatur fuga placeat earum nostrum, illo aut minima sunt
    nulla tempora in laboriosam, unde dolores veniam maxime?
    Perspiciatis cum debitis adipisci voluptatum!`,
    `3 Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem
    ipsum dolor sit amet consectetur, adipisicing elit.
    Consequatur fuga placeat earum nostrum, illo aut minima sunt
    nulla tempora in laboriosam, unde dolores veniam maxime?
    Perspiciatis cum debitis adipisci voluptatum!`,
    `4 Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem
    ipsum dolor sit amet consectetur, adipisicing elit.
    Consequatur fuga placeat earum nostrum, illo aut minima sunt
    nulla tempora in laboriosam, unde dolores veniam maxime?
    Perspiciatis cum debitis adipisci voluptatum!`,
    `5 Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem
    ipsum dolor sit amet consectetur, adipisicing elit.
    Consequatur fuga placeat earum nostrum, illo aut minima sunt
    nulla tempora in laboriosam, unde dolores veniam maxime?
    Perspiciatis cum debitis adipisci voluptatum!`,
];

const btn = document.querySelector("button");
const inputForm = document.querySelector("input");
const contentDiv = document.querySelector(".content");

let input_number = 0;
btn.addEventListener("click", function () {
    input_number = inputForm.value;
    let shown_articles = articles.filter(function (x, index) {
        return index <= input_number - 1;
    });
    let content = shown_articles
        .map(function (e) {
            return `<p>${e}</p>`;
        })
        .join("");
    contentDiv.innerHTML = content;
    if (input_number > articles.length) {
        contentDiv.innerHTML = `<p style="color:red;font-weight:700;">there are only ${articles.length} articles at the moment, pick a smaller number</p>`
    }
});

console.log(input_number);

