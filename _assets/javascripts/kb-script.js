if (typeof sendAnalytic === 'undefined') {
  function sendAnalytic() {
  }
}

(function () {

  var updateChromeAppInstallButton = function (app_id, el_id) {
    var sugarcrm_install_url = 'https://chrome.google.com/webstore/detail/' + app_id;
    var app_home = 'chrome-extension://' + app_id + '/option-page.html';
    var install_btn = document.getElementById(el_id);
    if (install_btn) {
      if (window.chrome) {
        if (chrome.app.isInstalled) {
          if (el_id.substr(0, 4) != 'link') {
            install_btn.textContent = 'Installed Already';
          }
          install_btn.href = app_home;
          install_btn.setAttribute('title', 'You have already installed, visit extension page.');
        } else {
          if (!install_btn.href) {
            install_btn.href = sugarcrm_install_url;
          }
          install_btn.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            chrome.webstore.install(sugarcrm_install_url, function successCallback(opt) {
              if (chrome.app.isInstalled) {
                install_btn.textContent = 'Setup';
                install_btn.href = app_home;
                install_btn.setAttribute('title', 'Installed, visit extension page to get started.');
              }
            }, function failureCallback(e) {
              window.console.error(e);
              var a = document.querySelector('.alternative-install');
              if (a) {
                a.style.display = '';
              }
            });
          }
        }
      } else {
        if (el_id.substr(0, 4) != 'link') {
          install_btn.textContent = 'Install on Chrome';
        }
        install_btn.href = sugarcrm_install_url;
      }
    }
  };
  updateChromeAppInstallButton('iccdnijlhdogaccaiafdpjmbakdcdakk', 'install-sugarcrm');
  updateChromeAppInstallButton('iccdnijlhdogaccaiafdpjmbakdcdakk', 'link-install-sugarcrm');
  updateChromeAppInstallButton('ldikiokclnbceabnlbkabmcacpiednop', 'install-gmail-tracking');
  updateChromeAppInstallButton('ldikiokclnbceabnlbkabmcacpiednop', 'link-install-gmail-tracking');

})();


(function runForum() {

  var basePath = location.pathname;
  if (basePath.length > 4) {
    basePath = basePath.substring(0, 4);
    if (basePath === '/xkb/') {
      basePath = '/xkb/';
    } else if (basePath === '/mkb/') {
      basePath = '/mkb/';
    } else if (basePath === '/akb/') {
      basePath = '/akb/';
    } else {
      basePath = '/kb/';
    }
  } else {
    basePath = '/kb/';
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function send(cb, mth, path, body) {
    if (!cb) {
      cb = function (x) {
        console.log(x);
      }
    }
    mth = mth || 'GET';
    var xhr = new XMLHttpRequest();
    xhr.open(mth, path, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.onload = function (ev) {
      if (xhr.status == 401 && /^https/.test(xhr.responseText)) {
        location.href = xhr.responseText;
        return;
      }
      if (/json/.test(xhr.getResponseHeader('Content-Type'))) {
        cb(JSON.parse(xhr.responseText), xhr.status, xhr.responseText);
      } else {
        cb(xhr.responseText, xhr.status, xhr.responseText);
      }
    };
    var payload = body ? JSON.stringify(body) : null;
    xhr.send(payload);
  }

  window.sendRequest = send;

  /**
   * queryPost({}, 'vote');
   * @param {Object} post
   * @param {string=} ns
   * @param {Function=} cb
   */
  window.queryPost = function (post, ns, cb) {
    if (!post.id) {
      post.id = parseInt($('[data-id]').attr('data-id'), 10);
    }
    if (!post.id) {
      console.error('id');
      return;
    }
    var params = [];
    for (var key in post) {
      params.push(key + '=' + post[key]);
    }
    ns = ns || '';
    if (ns) {
      ns = ns + '/';
    }
    sendKb(function (json, status) {
      if (cb) {
        cb(json);
      } else {
        console.log(json, status);
      }
    }, 'GET', ns + post.id + '?' + params.join('&'));
  };

  window.viewVotes = function () {
    queryPost({}, 'vote', function (json) {
      console.info('Post ' + json.postId);
      for (var i = 0; i < json.votes.length; i++) {
        console.info(json.votes[i] + ' vote by ' + json.voters[i].email);
      }
    });
  };

  function sendKb(cb, mth, path, body) {
    send(cb, mth, basePath + path, body);
  }

  /**
   * patchPost({type: 'FAQ'});
   * patchPost({product: 1});
   * patchPost({status: 'Completed'});
   * patchPost({status: 'Deleted'}); // delete a post
   * patchPost({ownerId: 'jaap.de.koning@a4u.taxi'});
   * patchPost({createdAt: new Date('Feb 2, 2015').getTime()})
   */
  window.patchPost = function (post) {
    if (!post.id) {
      post.id = parseInt($('[data-id]').attr('data-id'), 10);
    }
    if (!post.id) {
      console.error('id');
      return;
    }
    sendKb(function (json, status) {
      console.log(json, status);
    }, 'POST', post.id + '?patch=1', post);
  };

  function serverSearch(q, done) {

    sendKb(function (json, status) {
      if (status == 200) {
        var n = json ? json.length || 0 : 0;
        for (var i = 0; i < n; i++) {
          json[i] = {
            link: basePath + json[i].id,
            title: json[i].title,
            htmlTitle: '<b>' + json[i].title + '</b>',
            htmlSnippet: json[i].content
          }
        }
        done(json);
      } else {
        console.error(json);
      }
    }, 'GET', 'search/?q=' + q);

  }

  window.serverSearch = serverSearch;

  function siteSearch(q, cb) {
    sendKb(function (json) {
      console.info('Post ' + json);
      cb(json.items);
    }, 'GET',  'site-search/?q=' + q);
  }

  window.siteSearch = siteSearch;

  function exeSearch(q, root) {
    siteSearch(q, function (arr) {
      root.innerHTML = '';
      var n = arr ? arr.length || 0 : 0;
      sendAnalytic('trackSiteSearch', q, 'kb', n);
      for (var i = 0; i < n; i++) {
        var json = arr[i];
        var div = document.createElement('div');
        div.innerHTML = '<h4><a href="' + json.link + '">' + json.title + '</a></h3><div class="post-content">' +
            json.htmlSnippet + '</div>';
        root.appendChild(div);
      }
    });
  }

  var dispSearchBox = debounce(function (q) {
    var el = document.getElementById('search-result');
    var el2 = document.getElementById('main-content');
    if (q) {
      el.style.display = '';
      el2.style.display = 'none';
      exeSearch(q, el);
    } else {
      el.style.display = 'none';
      el2.style.display = '';
    }
  }, 500);
  var $searchBox = $('INPUT.search');
  $searchBox.on('keyup', function (ev) {
    var val = $(this).val();
    dispSearchBox(val);
    var form = $(this).parents('FORM').get(0);
    if (form) {
      var m = val.match(/([\s]+)/g);
      if (m && m.length > 2) {
        form.classList.remove('empty');
      } else {
        form.classList.add('empty');
      }
    }
  });

  function renderNewPost(form) {
    if (!form) {
      return
    }
    form.onsubmit = function (ev) {
      ev.preventDefault();
      var title = form.title.value;
      var content = form.content.value;
      var post = {
        title: title,
        content: content
      };
      if (content.length < 30) {
        alert('Content must be at least 30 characters. Please explain more.');
        return;
      }
      if (form.id) {
        post['id'] = form.id.value;
      }
      if (form.type) {
        post['type'] = form.type.value;
      }
      sendKb(function (json, status, statusText) {
        if (status == 200 || status == 201) {
          var id = json.threadId || json.id;
          location.href = basePath + id + '-' + json.title;
        } else {
          alert(statusText);
        }
      }, 'POST', '', post);
    };

    var dispSearch = debounce(function (q) {
      exeSearch(q, document.getElementById('search-result'));
    }, 500);
    var $input = $(form).find('input[name="title"]');
    $input.on('keyup', function (ev) {
      dispSearch($input.val());
    });
  }

  function processAdmin(user) {
    document.body.classList.add('user-admin');
    $('.vote-panel').on('click', function () {
      var $post = $(this).parents('[data-id]');
      var id = $post.attr('data-id');
      queryPost({id: id}, 'vote', function (json) {
        var h = $post.find('H1, H2');
        var votes = [];
        for (var i = 0; json.votes && i < json.votes.length; i++) {
          votes.push(json.votes[i] + ' ' + json.voters[i].email);
        }
        $('<div>' + votes.join(', ') + '</div>').insertAfter(h);
      });
    });
  }

  function isUserAdmin(email) {
    if (!email) return false;
    var idx = email.indexOf('@');
    if (idx === -1) return false;
    return email.substring(idx) === '@yathit.com';
  }

  var path = '/rpc_login?url=' + location.href;
  send(function (login_resp) {
    var user = login_resp.User || {};

    var login_el = document.getElementById('login');
    if (user.is_login) {
      login_el.textContent = '';
      document.body.classList.add('user-login');
      login_el.textContent = 'Profile';
      login_el.href = basePath + 'profile/' + user.Id.$t;
      if (isUserAdmin(user.email)) {
        processAdmin(user);
      }
      localStorage.setItem('uid', user.Id.$t);
      localStorage.setItem('uname', user.email);
    } else {
      login_el.textContent = 'Login';
      login_el.href = user.login_url;
      document.body.classList.add('user-notlogin');
    }
  }, 'GET', path);

  renderNewPost(document.querySelector('FORM.forum-post'));

  var cmt_form = document.querySelector('FORM.comment-post');
  if (cmt_form) {
    cmt_form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var btn = cmt_form.querySelector('button');
      var comment = cmt_form.comment.value;
      if (comment.length < 30) {
        alert('Please explain more. Content must me longer then 30 characters.');
        return;
      }
      btn.setAttribute('disabled', '');
      var id = parseInt(document.querySelector('.post-root').getAttribute('data-id'), 10);
      var data = {
        'threadId': id,
        'replyId': id,
        'content': comment
      };
      sendKb(function (json, status, msg) {
        btn.removeAttribute('disabled');
        if (status == 200 || status == 201) {
          cmt_form.comment.value = '';
          var div = document.createElement('div');
          div.innerHTML = '<div class="post-comment" data-id="${json.id}">' +
              '<DIV class="comment-header">' +
              '<span class="poster">You</span> commented <span data-date="' + json.modifiedAt + '">a moment ago</span>' +
              '<a style="" href="' + basePath + json.id + '-?edit=1"><i class="fa fa-edit edit-button"></i></a>' +
              '</DIV>' +
              '<DIV class="comment-content">' +
              json.content +
              '</DIV>' +
              '</div>';
          var root = document.querySelector('.post-comments');
          if (root.firstChild) {
            root.insertBefore(div, root.firstChild)
          } else {
            root.appendChild(div);
          }
        } else {
          alert(msg);
        }
      }, 'POST', '', data);
    }, false);
  }

  $('FORM.user-profile').on('submit', function (ev) {
    ev.preventDefault();
    var form = ev.target;
    var nickname = form.nickname.value;
    if (!nickname) {
      alert('Enter nickname');
      return;
    }
    var data = {
      nickname: nickname
    };
    sendKb(function (json, status, msg) {
      if (status == 200) {
        location.reload();
      } else {
        alert(msg);
      }
    }, 'POST', 'user/', data);
  });

  $('#upload-image').on('click', function (ev) {
    ev.preventDefault();
    $('#upload-input').click();
  });

  $('#upload-input').on('change', function (ev) {
    $btn = $('#upload-image');
    var input = $(this);
    var filename = input.val();
    var ext = filename.substr(filename.lastIndexOf('.'));
    var form = input.parents('FORM');
    var data = new FormData(form.get(0));
    $btn.attr('disabled', '1');
    $.post({
      type: 'POST',
      url: '/gcs/upload/' + filename,
      data: data,
      processData: false,
      contentType: false,
      complete: function (xhr, code) {
        if (code === 'success') {
          $btn.removeAttr('disabled');
          console.log(xhr.responseText);
          input.value = null;
        } else {
          alert(xhr.responseText, "Error submitting.");
        }
      }
    });
  });

  $('.btn-vote').on('click', function (ev) {
    var $item = $(this).parents('[data-id]');
    if (!$item.length) {
      throw new Error('invalid post id ' + id + ' for ' + $item.attr('data-id') +
          '\nJava long integer not fit in javascript number? Shit, I knew this will come.');
    }
    var id = parseInt($item.attr('data-id'), 10);
    if (document.body.classList.contains('user-notlogin')) {
      alert('Please login and vote again.');
      location.href = document.getElementById('login').href;
    }

    var vote = parseInt($(this).val(), 10) || 0;
    sendKb(function (vote, status) {
      if (status == 200) {
        $item.find('[name="vote-count"]').text(vote.total);
        $item.find('.voting-panel').get(0).className = 'voting-panel vote' + vote.mine;
        $item.find('[name="remain-vote"]').text(vote.remain);
      }
    }, 'POST', 'vote/' + id + '?vote=' + vote);
  });

  $('.video-link').on('click', function (ev) {
    ev.preventDefault();
    $('#player').attr('src', $(this).attr('href'));
  });


})();

$(function () {
  $(".youtube-popup").YouTubeModal({autoplay: 0, width: 640, height: 360});
});


