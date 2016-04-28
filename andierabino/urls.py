from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^about$', views.about, name="about"),
    url(r'^contact$', views.contact, name="contact"),
    url(r'^work$', views.work, name="work"),
    url(r'^work/roadmob$', views.work_roadmob, name="work"),
    url(r'^work/resume-manager$', views.work_resume_manager, name="resume-manager"),
    url(r'^work/space-voyage$', views.work_up_csi_app, name="up-csi-app"),
    url('', include('blog.urls')),
    url(r'^$', views.index, name="index"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


handler404 = 'andierabino.views.custom_404'
