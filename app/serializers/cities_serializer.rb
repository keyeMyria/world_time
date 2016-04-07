class CitiesSerializer < ActiveModel::Serializer
  attributes :id
  # attributes :id, :text, :hour

  # def text
  #   object.try(:name)
  # end

  # def hour
  #   object.try(:hour).try(:zone)
  # end

end
