import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "andierabino.config.settings.base")

import django
django.setup()

import psycopg2

from blog.models import Blog

for item in Blog.objects.all().values():

    # try:
    #     blog = Blog.objects.using('heyandie').get(pk=item.id)
    #     blog.body = item.body
    #     blog.title = item.title
    #     blog.save()
    # except:
    #     raise

    try:
        Blog.objects.using('heyandie').create(**item)
    except:
        pass
