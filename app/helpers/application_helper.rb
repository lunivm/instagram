module ApplicationHelper
  def svg_icon(name, options = {})
    file_path = "#{Rails.root}/app/assets/images/svg_icons/#{name}.svg"
    file = Rails.application.assets_manifest.find_sources(file_path).first

    raise "Can't find #{file_path}" unless file

    body   = file.to_s.force_encoding("UTF-8")
    doc    = Nokogiri::HTML::DocumentFragment.parse body
    svg    = doc.at_css "svg"

    svg['class'] += " #{options[:class]}"

    raw doc
  end
end
