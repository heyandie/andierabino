from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    url('^$', views.index),
    url(r'^admin/', include(admin.site.urls)),
    url('', include('blog.urls'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
