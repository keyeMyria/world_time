count = (-10...10)
count.each do |count|

  Hour.seed do |s|
    s.zone = count
  end

end

