class DashboardSerializer < ActiveModel::Serializer

  attributes :id
  has_many :cities, embed: :ids, include: true
  # has_many :cities, embed: :ids
  # has_many :cities

end
