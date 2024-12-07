require 'will_paginate/view_helpers/link_renderer'
require 'will_paginate/view_helpers/action_view'
class CustomPaginationRenderer < WillPaginate::ActionView::LinkRenderer
  def container_attributes
    {class: "table-pagination"}
  end

  def previous_or_next_page(page, text, classname)
    if page
      link(text, page, {:class =>  "btn btn-sm btn-default", "data-disable-with": "loading"})
    else
      link(text, page, {:class => "btn btn-sm btn-default disabled", :disabled => true})
    end
  end
  def page_number(page)
      aria_label = @template.will_paginate_translate(:page_aria_label, :page => page.to_i) { "Page #{page}" }
      if page == current_page
        link(page, page, :class => 'current', :"aria-label" => aria_label, :"aria-current" => 'page')
      else
        link(page, page, :rel => rel_value(page), :"aria-label" => aria_label)
      end
  end
end