create or replace function nearby_notes(lat float, long float)
returns table (
    id public.notes.id%TYPE, 
    title public.notes.title%TYPE, 
    text public.notes.text%TYPE, 
    user_name public.users.user_name%TYPE,
    created_at public.notes.created_at%TYPE,
    lat float, 
    long float, 
    dist_meters float
    )
language sql
as $$
  select 
    N.id, 
    U.user_name,
    title, 
    text,
    N.created_at,
    st_y(location::geometry) as lat, 
    st_x(location::geometry) as long, 
    st_distance(location, st_point(long, lat)::geography) as dist_meters
  from public.notes N
  inner join public.users U
  on N.user_id = U.id
  order by location <-> st_point(long, lat)::geography;
$$;
