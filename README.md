# CSUDH Catalog Scraper
Get all the courses listed on a page of the California State University Dominguez Hill's catalog.

## How To Use

The link to the catalog is: http://csudh.smartcatalogiq.com/en/2020-2021/Catalog.

After following the link, you can look for the major you are interested in. Copy the url to the specific catalog page and enter it in my API: https://catalogapi.manuelc.me/?url=< catalog's API >

For example, the url for the Bachelor of Science in Computer Science is http://csudh.smartcatalogiq.com/en/2020-2021/Catalog/Copy-of-Computer-Science/Bachelor-of-Science-in-Computer-Science.

Take this url and add it to the API call like so: https://catalogapi.manuelc.me/?url=http://csudh.smartcatalogiq.com/en/2020-2021/Catalog/Copy-of-Computer-Science/Bachelor-of-Science-in-Computer-Science.

Making that call will return some JSON. You can verify this by clicking on the link. The response will have the list of courses on the catalog (with the course name, number, and credits) and a boolean that tells you if the call was successful. 

