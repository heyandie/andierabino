from django.shortcuts import render_to_response, get_object_or_404
from django.core.urlresolvers import reverse

from .models import Blog

def index(request):
    return render_to_response('blog/index.html', {
        'posts': Blog.objects.all().order_by('-posted')[:5]
    })

def view_post(request, slug):
    post = get_object_or_404(Blog, slug=slug)
    og_tags = {
        'fb:app_id': 224598357874885,
        'og:type': 'article',
        'article:publisher': 'https://facebook.com/andie.rabino',
        'og:site_name': 'Andie Rabino',
        'og:title': post.title,
        'og:description': post.excerpt,
        'og:url': request.build_absolute_uri(reverse('view_blog_post', kwargs={'slug':post.slug})),
        'og:image': request.build_absolute_uri(reverse('index')) + post.image
    }
    title = post.title
    return render_to_response('blog/post.html', {
        'og_tags': og_tags,
        'post': post,
        'title': title
    })
