let url = "./app.json";
$(document).ready(function () {
    getdata();
})

async function getdata() {
    await fetch(url)
        .then(res => res.json())
        .then(data => {
            let body = data.body;
            //console.log(data.body);
            for (const key in body) {
                //console.log(key);
                key == "style" ? $("body").attr("style", body[key]) : Rearrange(body);
            }
        })
}

function Rearrange(body) {
    let generate;
    for (const key in body) {
        if (key !== "style")
            body.child.forEach(element => {
                for (const id in element) {
                    //console.log(`${id} : ${element[id]}`);
                    if (element[id] == "div") {
                        generate = document.createElement('div');
                        $("body").append(generate);
                    } else if (id == "style") {
                        generate.setAttribute("style", element[id]);
                    } else {
                        element.child.forEach(mobile => {
                            //console.log(mobile);
                            let generate2;
                            for (const index in mobile) {
                                if (mobile[index] == "div") {
                                    generate2 = document.createElement('div');
                                    generate.append(generate2);

                                } else if (index == "style") {
                                    generate2.setAttribute("style", mobile[index]);

                                } else {

                                    mobile.child.forEach(thirdChild => {
                                        //console.log(thirdChild);
                                        let generate3;
                                        for (const ideal in thirdChild) {
                                            //console.log(ideal);
                                            if (thirdChild[ideal] == "img") {
                                                generate3 = document.createElement('img');
                                                generate2.append(generate3);
                                            } else if (thirdChild[ideal] == "p") {
                                                generate3 = document.createElement('p');
                                                generate2.append(generate3);
                                            } else if (ideal == "style") {
                                                generate3.setAttribute("style", thirdChild[ideal]);
                                            } else if (ideal == "text") {
                                                generate3.innerHTML = thirdChild[ideal];
                                            } else if (ideal == "src") {
                                                $("img").attr("src", thirdChild[ideal]);
                                            } else {
                                                //console.log(thirdChild.child);
                                                let generate4;
                                                thirdChild.child.forEach(fourthChild => {
                                                    console.log(fourthChild);
                                                    for (const state in fourthChild) {
                                                        console.log(state);
                                                        if (state == "element") {
                                                            generate4 = document.createElement('span');
                                                            generate3.append(generate4);
                                                        } else if (state == "style") {
                                                            generate4.setAttribute("style", fourthChild[state]);
                                                        } else {
                                                            generate4.innerHTML = fourthChild[state];
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            });
    }
}


