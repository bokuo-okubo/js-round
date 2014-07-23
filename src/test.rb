require 'rubygems'
require 'anemone'


puts "type URL"
_url = gets.to_s 

Anemone.crawl(_url) do |anemone|
  anemone.on_every_page do |page|
    title = page.doc.xpath("//head/title/text()").first.to_s if page.doc
    puts title
  end
end
