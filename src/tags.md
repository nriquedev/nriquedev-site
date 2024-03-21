---
pagination:
  data: collections
  size: 1
  alias: publicTags
  filter:
    - all
    - post
    - posts
    - pages
    - tagList
  addAllPagesToCollections: true
layout: layouts/tag.njk
eleventyComputed:
  title: Tagged "{{ publicTags }}"
permalink: /tags/{{ publicTags | slugify }}/
---


<!-- ---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - post
    - posts
    - pages
    - tagList
  addAllPagesToCollections: true
layout: layouts/tag.njk
eleventyComputed:
  title: Tagged "{{ tag }}"
permalink: /tags/{{ tag | slugify }}/
--- -->
<!-- <h1>Tagged “{{ tag }}”</h1>
<p>See <a href="/tags/">all tags</a>.</p> -->

hola

