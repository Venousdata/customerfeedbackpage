create table reviews
(
    id        serial not null
        constraint reviews_pk
            primary key,
    name      varchar(120),
    email     varchar(200),
    rating    integer,
    comment   varchar(400),
    date      date,
    productid integer
        constraint product_id
            references products
);

comment on table reviews is 'product reviews';

alter table reviews
    owner to postgres;

create unique index reviews_id_uindex
    on reviews (id);

