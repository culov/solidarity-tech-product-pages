class GenericJob < ApplicationJob
  queue_as :default

  def perform(class_name, method_name, *args)
    # Airbrake.notify("GENERIC JOB class_name: #{class_name}, method_name: #{method_name}")
    class_name.constantize.send(method_name, *args)
  end
end