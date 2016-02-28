from django.shortcuts import render_to_response

from blog.models import Blog


def index(request):

    return render_to_response('index.html', {
        'posts': Blog.objects.all().order_by('-posted')[:6]
    })
