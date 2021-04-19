const getPosts = (url) => {
    fetch(url)
        .then((response) => {
            if(!response.ok) throw new Error('Error while executing request, status ' + response.status);
            return response.json();
        })
        .then((post) => {
            console.log(post);
            appendPosts (post);
            

            
        })
        .catch((error) => {
            console.error(error.message);
        });
}

getPosts('/api/blog');

function appendPosts (arr) {
    arr.forEach((post) => {
        let postPreview =   `<div class="article" style="background-image: url(${post['url']})">
                                        <a href="/blog/posts/${post['id']}">${post['title']}</a>
                                        <hr/>
                                        <div id="bottom">
                                            <div>
                                                <i class="fas fa-eye"></i>
                                                ${post['views']}
                                            </div>
                                            ${post['date']}
                                        </div>
                                    </div>`;
    $('#new-article').append(postPreview);
    })
}


/*data = await fetchAPIData({token: token, url: `${API_URL}/api/v1/companies/search/items?text=${text}&search_type=${searchType}`})

$('#search-wrapper').html(''); //erasing the divs of the screen
$('#top-wrapper').html('');
$('#charts-wrapper').html('');
$('#table-financials').html('');
$('#int-table').html('');
$('#ratings-table').html('');
$('#vol-table').html('');
$('#see-more-wrapper').html('')

$('#search-wrapper').css("display","block")
  
let title = `<div class="title">
                Foram encontrados ${data.length} resultados para a sua busca.
             </div>`
$('#search-wrapper').append(title);
----------------------------------------------------------------------------------  
data.forEach((company)=>{

    let component =     `<div class="company-container" data-id="${company['company_id']}" onClick="seachById(this)" onmouseout="normalBack(this)" onmouseover="background(this)">
                            <div class="name">[${company['company_code']}] ${company['company_name']}</div>
                            <div class="data-container">
                                <div class='sector'>
                                    <b>SETOR</b> ${company['sector_name']}
                                </div>
                                <div class="cnpj">
                                    <b>CNPJ</b> ${company['cnpj']}
                                </div>
                            </div>
                        </div>`;
    $('#search-wrapper').append(component);
})
----------------------------------------------------------------------------------
data.forEach((post)=>{

    let postPreview =   `<div class="article" style="background-image: url(${post['img_url']})">
                            <a href="${post['post_id']}">A MATRIZ ENERGÉTICA DO URUGUAI</a>
                            <hr/>
                            <div id="bottom">
                                <div>
                                    <i class="fas fa-eye"></i>
                                    ${post['views']}
                                </div>
                                ${post['date']}
                            </div>
                        </div>`;
    $('#search-wrapper').append(postPreview);
})*/