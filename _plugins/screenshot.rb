# Copyright 2014 Yathit Inc. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

#    http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

require "jekyll/assets_plugin/asset_path"

module Jekyll
  #
  # Display step number.
  #
  module ScreenShootInjector
    def screenshot(names)
      parts = names.split(' ')
      name = parts[0]
      opt = ''
      if parts.length > 1
        opt = parts[1]
      end
      out = '<div class="image-section"><img class="'
      out <<  "img-responsive #{opt}"
      out << '" src="https://yathit-assets.storage.googleapis.com/screenshot/'
      out << "#{name}"
      out << '"/></div>'
    end
  end
end

Liquid::Template.register_filter(Jekyll::ScreenShootInjector)
