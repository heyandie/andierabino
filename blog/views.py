import urllib.request
import json

from django.shortcuts import render_to_response, get_object_or_404
from django.core.urlresolvers import reverse

from .models import Blog

def index(request):
    return render_to_response('blog/index.html', {
        'posts': Blog.objects.all().order_by('-posted')[:5]
    })

def view_post(request, slug):
    post = get_object_or_404(Blog, slug=slug)

    rest_url_a = "http://api.facebook.com/restserver.php?format=json&method=links.getStats&urls="+"http://"+post.url
    rest_url_b = rest_url_a.replace('http://www.heyandie.com/blog','http://www.heyandie.com/article')

    response_a = urllib.request.urlopen(rest_url_a)
    response_b = urllib.request.urlopen(rest_url_b)

    data_a = json.loads(response_a.read().decode('utf-8'))
    data_b = json.loads(response_b.read().decode('utf-8'))


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
        'title': title,
        'posts': Blog.objects.exclude(id__in=(post.id,)).order_by('-posted')[:4],
        'header_class': "header-white",
        'share_count': data_a[0]['total_count'] + data_b[0]['total_count']
    })
