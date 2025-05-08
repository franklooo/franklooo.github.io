var posts=["2024/01/09/12306-project-share/","2025/05/06/hello-world/","2025/05/06/互联网工具收藏/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };