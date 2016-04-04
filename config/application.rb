require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(*Rails.groups)

module WorldTime
  class Application < Rails::Application
    config.app_generators.scaffold_controller :responders_controller
    config.active_record.raise_in_transactional_callbacks = true
  end
end
