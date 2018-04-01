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
  module StepNumberInjector
    def step(name)
      out = '<span class="step-number">'
      out << "#{name}"
      out << '</span>'
    end
  end
end

Liquid::Template.register_filter(Jekyll::StepNumberInjector)
