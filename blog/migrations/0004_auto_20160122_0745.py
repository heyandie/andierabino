# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-22 07:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_blog_excerpt'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='excerpt',
            field=models.TextField(blank=True),
        ),
    ]