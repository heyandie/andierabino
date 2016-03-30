from datetime import timedelta

from django.db import models
from django.db.models import permalink
from django.utils import timezone


class Blog(models.Model):
    title = models.CharField(max_length=100, unique=True)
    slug = models.CharField(max_length=100, unique=True)
    excerpt = models.TextField(blank=True)
    body = models.TextField()
    posted = models.DateTimeField(db_index=True, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    deleted = models.DateTimeField(null=True, blank=True)
    image = models.CharField(max_length=128, blank=True)
    category = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return '%s' % self.title

    @property
    def url(self):
        return 'www.heyandie.com/article/'+self.slug

    @property
    def localized_posted(self):
        return self.posted + timedelta(hours=8)
