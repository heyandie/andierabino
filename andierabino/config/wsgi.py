"""
WSGI config for andierabino project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

from whitenoise.django import DjangoWhiteNoise
from dj_static import Cling

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "andierabino.config.settings.base")

application = get_wsgi_application()
application = Cling(application)
application = DjangoWhiteNoise(application)
