from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from . import views

from django.http import HttpResponse

def acmechallenge(request):
    return HttpResponse("ZVh-6afFQVdamvTUTuDJHTMUGq8Xvl6GPyKp9rE8k_c.0EbgG3s-pGPPpWI3xEm0hf0xBn3XqfwRX_nkdVMEPIE")

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^about$', views.about, name="about"),
    url(r'^contact$', views.contact, name="contact"),
    url(r'^work$', views.work, name="work"),
    url(r'^work/roadmob$', views.work_roadmob, name="work"),
    url(r'^work/resume-manager$', views.work_resume_manager, name="resume-manager"),
    url(r'^work/space-voyage$', views.work_up_csi_app, name="up-csi-app"),
    url('', include('blog.urls')),
    url(r'^.well-known/acme-challenge/ZVh-6afFQVdamvTUTuDJHTMUGq8Xvl6GPyKp9rE8k_c$', acmechallenge),
    url(r'^$', views.index, name="index"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


handler404 = 'andierabino.views.custom_404'
