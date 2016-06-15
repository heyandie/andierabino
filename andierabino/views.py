from django.shortcuts import render_to_response

from blog.models import Blog


def index(request):

    return render_to_response('index.html', {
        'posts': Blog.objects.all().order_by('-posted')[:6]
    })

def custom_404(request):

    return render_to_response('404.html', {})


def about(request):

    return render_to_response('about.html', {})

def contact(request):

    return render_to_response('contact.html', {})


def work(request):

    return render_to_response('work.html')


def work_roadmob(request):

    return render_to_response('work/roadmob.html')


def work_resume_manager(request):

    return render_to_response('work/resume_manager.html')


def work_up_csi_app(request):

    return render_to_response('work/up_csi_app.html')
