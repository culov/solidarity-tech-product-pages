module Dashboard::Events::EventsHelper
	def set_event
		@event = MobilizeEvent.find(params[:id])
		if current_admin.lia_has_access_to_resource?(@event)
		elsif current_admin.has_access_to_resource?(@event)
			self.access_error("Login as chapter or organization with access to this resource")
		else
			self.access_error
		end
	end
end
