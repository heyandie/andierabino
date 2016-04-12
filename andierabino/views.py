from django.shortcuts import render_to_response

from blog.models import Blog


def index(request):

    return render_to_response('index.html', {
        'posts': Blog.objects.all().order_by('-posted')[:6]
    })


def about(request):

    return render_to_response('about.html', {})


def work(request):

    return render_to_response('work.html')


def work_roadmob(request):

    return render_to_response('work/roadmob.html')


def work_resume_manager(request):

    return render_to_response('work/resume_manager.html')
