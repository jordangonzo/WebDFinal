var updateView = async (button) => {
    if (button.dataset.querytype == "by_instructor") {
        let queryvalue = document.querySelector('#nameQuery').value;
        api = `api/by_instructor/${queryvalue}`;
    }
    else if (button.dataset.querytype == "by_course_code") {
        let queryvalue = document.querySelector('#numberQuery').value;
        api = ;
    }
    else if (button.dataset.querytype == "by_title") {
        let queryvalue = document.querySelector('#titleQuery').value;
        api = ;
    }
    else if (button.dataset.querytype == "by_level") {
        let queryvalue = document.querySelector('#levelQuery').value;
        api = `;
    }
    else  if (button.dataset.querytype == "combined_query") {
        let queryvalue1 = document.querySelector('#instructorQuery').value;
        let queryvalue2 = document.querySelector('#combined_levelQuery').value;
        console.log(queryvalue1,queryvalue2);
        api = ;
    }

    const data = await fetch(api);
    const model = await data.json();
    render_view(model);
}

var render_view = (model) => {
    var source = document.querySelector('#show_results_view').innerHTML;

    document.querySelector("#results").innerHTML = html;
}
