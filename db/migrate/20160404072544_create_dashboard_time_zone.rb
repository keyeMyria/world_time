class CreateDashboardTimeZone < ActiveRecord::Migration
  def change
    create_table :dashboard_time_zones do |t|

      t.integer :dashboard_id
      t.integer :time_zone_id

      t.timestamps null: false
    end
  end
end
