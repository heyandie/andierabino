from django.http import HttpResponseRedirect
from django.utils.http import urlquote

class DomainRedirectMiddleware(object):
    """
    In Apache's httpd.conf, you may have ServerName set to mysite.com.au along
    with a number of aliases: mysite.com, mysite.net, my-site.com etc.

    This middleware redirects any request that isn't for mysite.com.au to that
    domain, helping with SEO and brand recognition.
    """
    def process_request(self, request):
        if not request.META['HTTP_HOST'].endswith('heyandie.com') \
         and 'localhost' not in request.META['HTTP_HOST']:
            new_uri = '%s://%s%s%s' % (
                    request.is_secure() and 'https' or 'http',
                    'www.heyandie.com',
                    urlquote(request.path),
                    (request.method == 'GET' and len(request.GET) > 0) and '?%s' % request.GET.urlencode() or ''
                )

            return HttpResponseRedirect(new_uri)
