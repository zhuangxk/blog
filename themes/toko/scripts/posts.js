hexo.extend.generator.register('test', function (locals) {
    const config = this.config;
    return {
        path: 'posts/index.html',
        data: locals.posts,
        layout: ['posts', 'index']
    };

});