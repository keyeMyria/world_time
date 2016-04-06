class TimeZoneSerializer < ActiveModel::Serializer
  attributes :id, :text, :hours

  def text
    object.name
  end
end
