from django.conf.urls import url
from blog import views

urlpatterns = [
    url(r'^article/(?P<slug>[^\.]+)', views.view_post, name="view_blog_post"),
    url(r'^blog$', views.index, name="view_blog_list")
]
