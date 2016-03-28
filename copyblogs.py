import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "andierabino.config.settings.base")

import django
django.setup()

import psycopg2

from blog.models import Blog

for item in Blog.objects.all():

    try:
        blog = Blog.objects.using('heyandie').get(title=item.title)
        blog.posted = item.posted
        blog.save()
    except:
        raise
