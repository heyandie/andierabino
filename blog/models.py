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

    @permalink
    def get_absolute_url(self):
        return ('view_blog_post', None, {'slug': self.slug})
